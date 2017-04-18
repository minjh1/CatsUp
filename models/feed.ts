export class Feed {
  feed_seq: number=0;
  avatar_cat: string="";
  avatar_user: string="";

  name_cat: string="";
  name_user: string="";
  create_date: string="";
  content: string="";
  like_count: number;
  reply: Reply[]=[];

  constructor(avatar_cat:string, avatar_user:string, name_cat:string, name_user:string, create_date:string, content:string, like_count:number){
    this.avatar_cat=avatar_cat;
    this.avatar_user=avatar_user;
    this.name_cat=name_cat;
    this.name_user=name_user;
    this.create_date=create_date;
    this.content=content;
    this.like_count=like_count;
    this.set_Reply_temp();
  }
  setFeed(i:number){//db에서 게시글 정보 가져옴

  }
  set_Reply_temp(){
    this.reply=[{
      username : "야도란",
      reply_content: "귀여워용",
      create_date: "2017.4.13"
    },
    {
      username : "피카츄",
      reply_content: "피카피카",
      create_date: "2017.4.11"
    },
    {
      username : "케첩",
      reply_content: "좋은사진이네요~",
      create_date: "2017.4.15"
    }
    ]
  }
}
type Reply={
  username: string;
  reply_content: string;
  create_date: string;
}
