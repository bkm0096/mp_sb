package org.rabe.ws1_sb.todo.service;

import org.rabe.ws1_sb.todo.dto.TodoDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface TodoService {

    Page<TodoDTO> getList(Pageable pageable);
}
