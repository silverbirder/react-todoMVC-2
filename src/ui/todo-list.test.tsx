import { test, expect } from "@playwright/experimental-ct-react";
import TodoList from "./todo-list";

test.use({ viewport: { width: 500, height: 500 } });

test("completedによってtodoの表示が異なること", async ({ mount, page }) => {
  // Act
  await mount(
    <TodoList
      todos={[
        {
          id: 1,
          text: "My Todo 1",
          completed: true,
        },
        {
          id: 2,
          text: "My Todo 2",
          completed: false,
        },
      ]}
      toggleTodo={() => {}}
      deleteTodo={() => {}}
    />
  );

  // Assert
  await expect(page).toHaveScreenshot();
});
