import decimalParaBinario from "../src/Q4";

test("Conversão de decimal para binário", () => {
    expect(decimalParaBinario(0)).toBe("0");
    expect(decimalParaBinario(1)).toBe("1");
    expect(decimalParaBinario(2)).toBe("10");
    expect(decimalParaBinario(5)).toBe("101");
    expect(decimalParaBinario(13)).toBe("1101");
});