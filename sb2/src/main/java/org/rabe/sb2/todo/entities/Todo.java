package org.rabe.sb2.todo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

//테이블 용도 
//@Table 생략시에는 클래스 이름이 테이블 이름 
@Entity
@Table(name = "tbl_todo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Todo extends BaseEntity{

  //모든 엔티티는 반드시 Id가 존재 
  //PK는 반드시 객체타입(기본자료형 사용불가)
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long tno;

  @Column(nullable = false, length = 300)
  private String title;

  @Column(nullable = false, length = 50)
  private String writer;

  @CreatedDate
  @Column(name = "regdate", updatable = false)
  protected LocalDateTime regDate;

  @LastModifiedDate
  @Column(name ="moddate" )
  protected LocalDateTime modDate;
}