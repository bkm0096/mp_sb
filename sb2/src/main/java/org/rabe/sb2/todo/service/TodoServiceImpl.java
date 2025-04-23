package org.rabe.sb2.todo.service;

import org.rabe.sb2.todo.entities.Todo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.rabe.sb2.todo.dto.TodoDTO;
import org.rabe.sb2.todo.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class TodoServiceImpl implements TodoService {

    private final TodoRepository repository;

    @Override
    public Long addTodo(String title, String writer) {
        Todo todo = Todo.builder()
                .title(title)
                .writer(writer)
                .regDate(LocalDateTime.now())
                .modDate(LocalDateTime.now())
                .build();

        Todo result = repository.save(todo);
        return result.getTno(); // 저장된 PK 반환
    }

    @Override
    public List<TodoDTO> getAll(int page, int size) {
        Pageable pageable = PageRequest.of(page - 1, size, Sort.by("tno").descending());
        Page<Todo> result = repository.findAll(pageable);

        return result.getContent().stream()
                .map(todo -> TodoDTO.builder()
                        .tno(todo.getTno())
                        .title(todo.getTitle())
                        .writer(todo.getWriter())
                        .regDate(todo.getRegDate())
                        .modDate(todo.getModDate())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public Page<TodoDTO> getList(Pageable pageable) {
        Page<Todo> result = repository.findAll(pageable);

        return result.map(todo -> TodoDTO.builder()
                .tno(todo.getTno())
                .title(todo.getTitle())
                .writer(todo.getWriter())
                .regDate(todo.getRegDate())
                .modDate(todo.getModDate())
                .build());
    }

    @Override
    public TodoDTO getTodo(Long tno) {
        // selectDTO 메서드를 통해 TodoDTO를 반환
        return repository.selectDTO(tno);
    }

    @Override
    public void deleteTodo(Long tno) {
        Todo todo = repository.findById(tno)
                .orElseThrow(() -> new RuntimeException("Todo not found"));
        repository.delete(todo);  // 삭제 작업
    }

    @Override
    public TodoDTO updateTodo(Long tno, TodoDTO todoDTO) {
        Todo todo = repository.findById(tno)
                .orElseThrow(() -> new RuntimeException("Todo not found"));

        // 수정된 내용 적용
        todo.setTitle(todoDTO.getTitle());
        todo.setWriter(todoDTO.getWriter());
        todo.setModDate(LocalDateTime.now());

        // 저장
        Todo updatedTodo = repository.save(todo);

        // 기존 생성자를 사용하여 TodoDTO 객체 생성
        return new TodoDTO(
                updatedTodo.getTno(),
                updatedTodo.getTitle(),
                updatedTodo.getWriter(),
                updatedTodo.getRegDate(),
                updatedTodo.getModDate()
        );
    }

}
