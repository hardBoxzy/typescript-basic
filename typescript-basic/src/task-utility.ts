type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

// 編集中の投稿を表す型（どの項目も未入力でOKにする）
type EditingPost = Partial<Post>;

// 一覧表示用の投稿を表す型（必要な情報だけを抽出する）
type SummaryPost = Pick<Post, 'id' | 'title'>;

// 完了済みの投稿を表す型（内容を変更不可にする）
type CompletedPost = Readonly<Post>;