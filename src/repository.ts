import type { Wizard, Spell, NewWizard } from "./types";
import { Log, MeasureTime, ValidateSpellPower } from "./decorators";

export class Repository<T extends { id: number }> {
  private items: T[] = [];

  @Log
  add(item: T): void {
    this.items.push(item);
  }

  @MeasureTime
  findById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }

  getAll(): T[] {
    return [...this.items];
  }

  update(id: number, changes: Partial<T>): boolean {
    const item = this.findById(id);

    if (!item) return false;

    Object.assign(item, changes);
    return true;
  }
}

export class WizardRepository extends Repository<Wizard> {
  // Ex.1: the repository assigns the id, the caller never provides it.
  register(data: NewWizard): Wizard {
    const nextId = Math.max(0, ...this.getAll().map(w => w.id)) + 1;
    const wizard: Wizard = { ...data, id: nextId };
    this.add(wizard);
    return wizard;
  }

  // Ex.2: Wizard["house"] only accepts the four valid houses.
  findByHouse(house: Wizard["house"]): Wizard[] {
    return this.getAll().filter(w => w.house === house);
  }
}

export class SpellRepository extends Repository<Spell> {
  // Ex.4: reject spells with negative power.
  @ValidateSpellPower
  override add(spell: Spell): void {
    super.add(spell);
  }
}