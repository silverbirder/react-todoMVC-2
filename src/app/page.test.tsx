import { test, expect } from "@playwright/experimental-ct-react";
import App from "./page";

test.use({ viewport: { width: 500, height: 500 } });

test("todosの文字が表示されること", async ({ mount }) => {
  // Act
  const component = await mount(<App />);

  // Assert
  await expect(component).toContainText("todos");
});

test("todoを追加したらURLにaddedクエリパラメータが追加されること", async ({
  mount,
  page,
}) => {
  // Arrange
  const component = await mount(<App />);
  await component.getByRole("textbox").fill("My Todo 1");

  // Act
  await page.keyboard.press("Enter");

  // Assert
  expect(page).toHaveURL(/added/);
});
