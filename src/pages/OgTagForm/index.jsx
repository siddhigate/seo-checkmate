import React, { useState } from "react";
import Nav from "../../components/Nav";
import "./index.css";

function getOgTags({
  title,
  type,
  description,
  url,
  imageUrl,
  siteName,
  locale,
}) {
  return [
    `<meta property="og:title" content="${title}">`,
    `<meta property="og:description" content="${description}">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${imageUrl}">`,
    `<meta property="og:site_name" content="${siteName}">`,
  ];
}

const OgTagForm = () => {
  const [formInputs, setFormInputs] = useState({
    title: "",
    description: "",
    type: "",
    url: "",
    imageUrl: "",
    siteName: "",
    locale: "",
  });
  const [metaTags, setMetaTags] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    console.log(formInputs);
    setMetaTags(
      getOgTags(formInputs)
    );
  }

  function setFormVal(key, value) {
    setFormInputs((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <>
      <Nav></Nav>
      <div className="meta-tag-form">
        <h1>Generate OG tags for your website!</h1>

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
            <label htmlFor="type">Type</label>
            <input
              id="type"
              value={formInputs.type}
              onChange={(e) => setFormVal("type", e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="url">URL</label>
            <textarea
              id="url"
              value={formInputs.url}
              onChange={(e) => setFormVal("url", e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="sitename">Site name</label>
            <input
              id="sitename"
              value={formInputs.siteName}
              onChange={(e) => setFormVal("siteName", e.target.value)}
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

export default OgTagForm;
