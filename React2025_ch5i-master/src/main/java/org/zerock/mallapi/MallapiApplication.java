package org.zerock.mallapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MallapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MallapiApplication.class, args);
	}

}


// docker 이미지 생성

// docker build -t 계정/product2025 .
// . 반드시 들어가야함

// docker build -t rasbear/product2025 .

// docker push rasbear/product2025