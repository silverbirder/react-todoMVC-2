import { test, expect } from "@playwright/experimental-ct-react";
import App from "./page";

test.use({ viewport: { width: 500, height: 500 } });

test("should work", async ({ mount }) => {
  // Act
  const component = await mount(<App />);

  // Assert
  await expect(component).toContainText("todos");
});
