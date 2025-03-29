
package com.bookstore.repositories;

import com.bookstore.models.Book;
import com.bookstore.models.CartItem;
import com.bookstore.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUser(User user);
    Optional<CartItem> findByUserAndBook(User user, Book book);
    Optional<CartItem> findByIdAndUser(Long id, User user);
    void deleteByUser(User user);
}
