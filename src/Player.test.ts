import Player from "./Player";

describe("Player", () => {
    it("id",  () => {
        const p = new Player(123, "Serban");
        expect(p.getId()).toEqual(123);
    });

    it("name", () => {
        const p = new Player(123, "Serban");
        expect(p.getName()).toEqual("Serban");
    });
});