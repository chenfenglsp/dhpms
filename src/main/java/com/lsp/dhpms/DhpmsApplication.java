package com.lsp.dhpms;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude= {DataSourceAutoConfiguration.class})
//@MapperScan("com.lsp.dhpms.dao")
public class DhpmsApplication {

    public static void main(String[] args) {
        SpringApplication.run(DhpmsApplication.class, args);
    }
}
