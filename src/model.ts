export interface ArticleInter {
  article_id: number;
  user_id: number;
  subset_id: number;
  nick_name: string;
  subset_name: string;
  title: string;
  content: string;
  state: boolean;
  create_time: string;
  read_count: number;
}

export interface InfoInter {
  title: string;
  describe: string;
  src: string;
}
export interface EventsInter {
  title: string;
  date: string;
}

export interface SubsetInter {
  subset_id: number;
  subset_name: string;
}
