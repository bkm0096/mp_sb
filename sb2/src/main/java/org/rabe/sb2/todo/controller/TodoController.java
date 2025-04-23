package org.rabe.sb2.todo.controller;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.rabe.sb2.todo.service.TodoService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.rabe.sb2.todo.dto.ActionResultDTO;
import org.rabe.sb2.todo.dto.TodoDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/v1/todos")
@Log4j2
@RequiredArgsConstructor
//@PreAuthorize("permitAll()")
public class TodoController {

    private final TodoService service;

//    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/list")
    public ResponseEntity<Page<TodoDTO>> getList(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("tno").descending());
        Page<TodoDTO> result = service.getList(pageable);

        return ResponseEntity.ok(result);
    }


    @PostMapping("")
    public ResponseEntity<ActionResultDTO<Long>> post(
            @RequestParam("title") String title,
            @RequestParam("writer") String writer,
            @RequestPart(value = "file", required = false) List<MultipartFile> files
    ) {
        log.info("title: {}, writer: {}", title, writer);

        Long newTno = service.addTodo(title, writer);

        return ResponseEntity.ok(ActionResultDTO.<Long>builder()
                .result("success")
                .data(newTno)
                .build());
    }

    @GetMapping("/{tno}")
    public ResponseEntity<TodoDTO> readTodo(@PathVariable Long tno) {
        TodoDTO todoDTO = service.getTodo(tno);
        return ResponseEntity.ok(todoDTO); // TodoDTO 객체를 반환
    }

    @DeleteMapping("/{tno}")
    public ResponseEntity<ActionResultDTO<String>> deleteTodo(@PathVariable Long tno) {
        try {
            service.deleteTodo(tno);
            return ResponseEntity.ok(new ActionResultDTO<>("success", "Todo가 삭제되었습니다."));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ActionResultDTO<>("failure", "삭제에 실패했습니다."));
        }
    }

    @PutMapping("/{tno}")
    public ResponseEntity<TodoDTO> updateTodo(@PathVariable Long tno, @RequestBody TodoDTO todoDTO) {
        TodoDTO updatedTodo = service.updateTodo(tno, todoDTO);
        return ResponseEntity.ok(updatedTodo);
    }
}