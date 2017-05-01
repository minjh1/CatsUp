export class Cat {
  seq: number;
  avatar: string="";
  name: string="";
  name2: string=""
  name3: string="";
  sex: number;
  habitat: string="";
  info1: string="";
  info2: string="";
  info3: string="";

  constructor(seq:number, avatar:string, name:string, name2:string, name3: string, sex:number, habitat: string, info1:string,info2:string,info3:string ){
    this.seq=seq;
    this.avatar=avatar;
    this.name=name;
    this.name2=name2;
    this.name3=name3;
    this.sex=sex;
    this.habitat=habitat;
    this.info1 =info1;
    this.info2 =info2;
    this.info3 =info3;
  }
}
