import Repository from "../shared/repository";
import { Game } from "../types";

class GameRepository extends Repository<Game> {
  private readonly STORAGE_KEY = "game";

  find(): Game | null {
    return this.db.get<Game>(this.STORAGE_KEY);
  }

  create(data: Game): Game {
    this.db.save(this.STORAGE_KEY, data);
    return data;
  }

  update(data: Game): Game {
    this.db.save(this.STORAGE_KEY, data);
    return data;
  }

  remove(): void {
    this.db.remoce(this.STORAGE_KEY);
  }
}

export default GameRepository;
