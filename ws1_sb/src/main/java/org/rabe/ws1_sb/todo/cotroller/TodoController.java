package org.rabe.ws1_sb.todo.cotroller;


import org.rabe.ws1_sb.todo.dto.TodoDTO;
import org.rabe.ws1_sb.todo.service.TodoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/todos")
@Log4j2
@RequiredArgsConstructor
//@CrossOrigin(origins = "*", methods = RequestMethod.GET)  //임시로 CORS 해결
public class TodoController {

    private final TodoService service;

    @GetMapping("/myPage")
    public ResponseEntity<TodoDTO> getUser(@PathVariable Long uid) {
        return null;
    }

    @GetMapping("/list")
    public ResponseEntity<Page<TodoDTO>> getList(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "6") int size
    ) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("tno").descending());
        Page<TodoDTO> result = service.getList(pageable);

        return ResponseEntity.ok(result);
    }

}
