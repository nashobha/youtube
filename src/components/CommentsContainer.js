const CommentsContainer = () => {
  const commentsData = [
  {
    name: "Shobha",
    text: "Hi there! I need help with my account.",
    replies: [
      {
        name: "Support",
        text: "Sure! I'd be happy to help. Can you tell me the issue?",
        replies: []
      },
      {
        name: "Shobha",
        text: "I can't log in. It says incorrect password.",
        replies: [
          {
            name: "Support",
            text: "Have you tried resetting your password?",
            replies: []
          },
          {
            name: "Shobha",
            text: "Yes, but I didn’t receive the reset email.",
            replies: []
          }
        ]
      }
    ]
  },
  {
    name: "Ravi",
    text: "Is there a way to change my email address?",
    replies: [
      {
        name: "Support",
        text: "Yes, you can change it in account settings under 'Email Preferences'.",
        replies: []
      }
    ]
  },
  {
    name: "Priya",
    text: "Thank you for the quick support earlier!",
    replies: []
  }
];


    const Comment = ({ data }) => {
        const { name, text} = data;
        return <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
            <img className="w-8 h-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    }

    const CommentsList = ({ comments }) => {
        return comments.map((comment, index) => (
            <div key={index} >
                <Comment data={comment} />
                <div className="pl-5 border border-l-black ml-5">
                   <CommentsList comments ={comment.replies}/>
                </div>
            </div>
        ))
    }
    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments :</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer;