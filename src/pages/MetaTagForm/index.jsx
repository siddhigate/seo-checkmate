import React, { useState } from "react";
import Nav from "../../components/Nav";
import "./index.css";

function getMetaTagsStr(title, description, keywords, author) {
  return [
    `<title>${title}</title> \n`,
    `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    `<meta name="description" content="${description}">`,
    `<meta name="keywords" content="${keywords}">`,
    `<meta name="author" content="${author}">`,
  ];
}

const MetaTagForm = () => {
  const [formInputs, setFormInputs] = useState({
    title: "",
    description: "",
    keywords: "",
    author: "",
  });
  const [metaTags, setMetaTags] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    console.log(formInputs);
    setMetaTags(
      getMetaTagsStr(
        formInputs.title,
        formInputs.description,
        formInputs.keywords,
        formInputs.author
      )
    );
  }

  function setFormVal(key, value) {
    setFormInputs((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <>
      <Nav></Nav>
      <div className="meta-tag-form">
        <h1>Generate Meta tags for your website!</h1>

        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={formInputs.title}
              onChange={(e) => setFormVal("title", e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={formInputs.description}
              onChange={(e) => setFormVal("description", e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="keywords">Keywords</label>
            <textarea
              id="keywords"
              value={formInputs.keywords}
              onChange={(e) => setFormVal("keywords", e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              id="author"
              value={formInputs.author}
              onChange={(e) => setFormVal("author", e.target.value)}
            ></input>
          </div>
          <button>Submit</button>
        </form>

        {metaTags && (
          <code>
            {metaTags.map((metaTag) => (
              <p>{metaTag}</p>
            ))}
          </code>
        )}
      </div>
    </>
  );
};

export default MetaTagForm;
