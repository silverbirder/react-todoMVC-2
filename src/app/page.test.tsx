import { test, expect } from "@playwright/experimental-ct-react";
import App from "./page";

test.use({ viewport: { width: 500, height: 500 } });

test("todosの文字が表示されること", async ({ mount, page }) => {
  // Act
  const component = await mount(<App />);

  // Assert
  await expect(component).toContainText("todos");
});
