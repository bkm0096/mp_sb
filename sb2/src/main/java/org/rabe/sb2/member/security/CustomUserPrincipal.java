package org.rabe.sb2.member.security;

import lombok.RequiredArgsConstructor;

import java.security.Principal;

@RequiredArgsConstructor
public class CustomUserPrincipal implements Principal {

    private final String mid;

    @Override
    public String getName() {
        return mid;
    }
}
