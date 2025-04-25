package org.rabe.ws1_sb.member.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.rabe.ws1_sb.member.security.CustomUserPrincipal;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.rabe.ws1_sb.util.JWTUtil;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class JWTCheckFilter extends OncePerRequestFilter {

    private final JWTUtil jwtUtil;

    @Getter
    @AllArgsConstructor
    public enum JWTErrorCode {

        NO_ACCESS_TOKEN(401, "No access token"),
        EXPIRED_TOKEN(401, "Expired token"),
        BAD_SIGNATURE(401, "Bad signature"),
        MALFORMED_TOKEN(401, "Malformed token");

        private int code;
        private String message;

    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String headerStr = request.getHeader("Authorization");

        //Access Token이 없는 경우
        if (headerStr == null || headerStr.contains("undefined") || !headerStr.startsWith("Bearer ")) {
            handleException(response, JWTErrorCode.NO_ACCESS_TOKEN);
            return;
        }
        String accessToken = headerStr.substring(7);

        try {
            Map<String, Object> tokenMap = jwtUtil.validateToken(accessToken);
            String uid = (String) tokenMap.get("uid");

            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                    new CustomUserPrincipal(uid),
                    null,
                    List.of(new SimpleGrantedAuthority("ROLE_USER"))
            );

            SecurityContextHolder.getContext().setAuthentication(authenticationToken);

            filterChain.doFilter(request, response);

        } catch (Exception e) {
            String message = e.getMessage();
            if(message.startsWith("JWT signature")){
                handleException(response, JWTErrorCode.BAD_SIGNATURE);
            }else if(message.startsWith("Malformed")){
                handleException(response, JWTErrorCode.MALFORMED_TOKEN);
            }else if(message.startsWith("JWT expired")){
                handleException(response, JWTErrorCode.EXPIRED_TOKEN);
            }
        }
    }

    private void handleException(HttpServletResponse response, JWTErrorCode errorCode) throws IOException {
        response.setStatus(errorCode.getCode());
        response.setContentType("application/json");
        response.getWriter().println("{\"error\": \"" + errorCode.getMessage() + "\"}");
    }
}
