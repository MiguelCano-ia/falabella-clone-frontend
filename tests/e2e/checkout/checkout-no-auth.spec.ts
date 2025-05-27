import { test, expect } from "@playwright/test";

test.describe("Checkout Process user not logged in", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/falabella-co/product/1");
    await page.getByRole("button", { name: "Agregar al Carro" }).click();
    await expect(page.getByText("Producto agregado a tu Carro")).toBeVisible();
    await page.getByRole("link", { name: "Ir al carro" }).click();
    await page.getByTestId("close-login-form").click();
    await expect(page.getByText("Resumen de la orden")).toBeVisible();
    await page.getByRole("button", { name: "Continuar compra" }).click();
  });

  test("should display auth form when user goes to checkout and it's not logged in", async ({
    page,
  }) => {
    await expect(
      page.getByText("Ingresa tu correo electrónico para continuar")
    ).toBeVisible();
  });

  test.describe("Checkout Process user logged in", () => {
    test.beforeEach(async ({ page }) => {
      await page.getByLabel("Correo electrónico:").fill("superman@google.com");
      await page.getByRole("button", { name: "Continuar" }).click();
      const modal = page.locator('[data-testid="login-form"]');
      await expect(modal).toBeVisible();
      await page.getByTestId("login-password-input").fill("Carlotta1");
      await page.getByRole("button", { name: "Ingresar" }).click();
      await page.getByTestId("close-login-form").click();
    });

    test("should display ways to send the order when user it's logged in but doesn't have a delivery address", async ({
      page,
    }) => {
      await expect(page.getByTestId("delivery-type-title")).toBeVisible();
    });

    test("should display address form when user it's logged in but doesn't have a delivery address", async ({
      page,
    }) => {
      await page
        .getByRole("button", {
          name: "Envio Express Ingresa tu dirección para conocer disponibilidad",
        })
        .click();
      const modal = page.locator('[data-testid="address-form"]');
      await expect(modal).toBeVisible();
    });
  });
});
