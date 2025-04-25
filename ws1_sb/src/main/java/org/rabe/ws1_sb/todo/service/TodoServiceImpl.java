package org.rabe.ws1_sb.todo.service;

import org.rabe.ws1_sb.todo.entity.Todo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.rabe.ws1_sb.todo.dto.TodoDTO;
import org.rabe.ws1_sb.todo.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Log4j2
public class TodoServiceImpl implements TodoService {

    private final TodoRepository repository;

    @Override
    public Page<TodoDTO> getList(Pageable pageable) {

        Page<Todo> result = repository.findAll(pageable);

        return result.map(todo -> TodoDTO.builder()
                .tno(todo.getTno())
                .title(todo.getTitle())
                .writer(todo.getWriter())
                .content(todo.getContent())
                .regDate(todo.getRegDate())
                .modDate(todo.getModDate())
                .build());
    }


}
