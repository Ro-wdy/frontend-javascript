import { Subjects } from "./Teacher";

export namespace Subjects {
  export class Subject {
    private _teacher!: Teacher;

    set teacher(teacher: Teacher) {
      this._teacher = teacher;
    }

    get teacher(): Teacher {
      return this._teacher;
    }

    setTeacher(teacher: Teacher) {
      this._teacher = teacher;
    }
  }
}
