package org.rabe.sb2.todo.service;

import org.rabe.sb2.todo.dto.TodoDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Transactional
public interface TodoService {

    Long addTodo(String title, String writer);

    List<TodoDTO> getAll(int page, int size);

    Page<TodoDTO> getList(Pageable pageable);

    TodoDTO getTodo(Long tno);

    void deleteTodo(Long tno);

    TodoDTO updateTodo(Long tno, TodoDTO todoDTO);
}
