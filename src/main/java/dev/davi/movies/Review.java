package dev.davi.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "review")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    private ObjectId id;
    private String body;
    private LocalDateTime created;
    private LocalDateTime update;

    public Review(String body, LocalDateTime created, LocalDateTime update) {
        this.body = body;
        this.created = created;
        this.update = update;
    }
}
