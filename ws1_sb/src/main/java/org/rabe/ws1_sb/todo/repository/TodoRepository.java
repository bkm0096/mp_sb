package org.rabe.ws1_sb.todo.repository;

import org.rabe.ws1_sb.todo.dto.TodoDTO;
import org.rabe.ws1_sb.todo.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TodoRepository extends JpaRepository<Todo, Long> {

    @Query("select new org.rabe.ws1_sb.todo.dto.TodoDTO(t.tno, t.title, t.writer, t.content, t.regDate, t.modDate) from Todo t where t.tno = :tno")
    TodoDTO selectTodo(@Param("tno") Long tno);
}
