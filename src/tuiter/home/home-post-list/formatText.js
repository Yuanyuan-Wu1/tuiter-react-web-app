export const formatText = (text) => {
    console.log("text", text)
    let content = text.split(/((?:#|@|https?:\/\/[^\s]+)[a-zA-Z0-9]+)/);
    let hashtag;
    let username;
    let linkText;
    return content.map((word) => {
        if (word.startsWith("@"||".com")) {
            username = word.replace('@', '')
            return <a href= "text-decoration-none">{word}</a >;
        } else if (word.startsWith("http")) {
            linkText = word.replace('http://', '').replace('https://', '')
            return <a href={word} className="text-decoration-none">{linkText}</a >
        } else {
            return word;
        }
    });
};