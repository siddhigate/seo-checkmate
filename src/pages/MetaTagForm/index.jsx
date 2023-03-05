import React, { useState } from "react";
import Modal from "../../components/Modal";
import Nav from "../../components/Nav";
import "./index.css";
import ReactConfetti from "../../components/Confetti";

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
  const [showModal, setShowModal] = useState(false);

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
    setShowModal(true);
  }

  function setFormVal(key, value) {
    setFormInputs((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <>
      <Nav></Nav>
      <div className="meta-tag-form">
        <div className="meta-tag-form-container">
          <h1>Generate Meta tags for your website!</h1>
          <div className="underline"></div>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="title">Title</label>
              <div className="sub-heading-underline"></div>
              <p className="tip">
                Include your primary keyword in the title tag. Keep the title
                tag under 60 characters
              </p>
              <input
                id="title"
                value={formInputs.title}
                onChange={(e) => setFormVal("title", e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <div className="sub-heading-underline"></div>
              <p className="tip">
                Include your primary keyword in the meta description. Keep the
                meta description under 155 characters
              </p>
              <textarea
                id="description"
                value={formInputs.description}
                onChange={(e) => setFormVal("description", e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="keywords">Keywords</label>
              <div className="sub-heading-underline"></div>
              <p className="tip">
                Use keywords that are semantically related to the content of the
                page.
              </p>
              <textarea
                id="keywords"
                value={formInputs.keywords}
                onChange={(e) => setFormVal("keywords", e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <div className="sub-heading-underline"></div>
              <p className="tip">
                The meta author tag is an HTML tag used to specify the author of
                a web page.
              </p>

              <input
                id="author"
                value={formInputs.author}
                onChange={(e) => setFormVal("author", e.target.value)}
              ></input>
            </div>
            <button>Submit</button>
          </form>
        </div>

        {metaTags.length > 0 && showModal && (
          <div>
            <Modal title={"Meta tags"} closeModal={() => setShowModal(false)}>
              <code>
                {metaTags.map((metaTag) => (
                  <p>{metaTag}</p>
                ))}
              </code>
              <button
                className="copy-btn"
                onClick={() =>
                  navigator.clipboard.writeText(metaTags.join("\n"))
                }
              >
                <span style={{ marginRight: "0.5rem" }}>Copy</span>
                <i className="fa-regular fa-clipboard"></i>
              </button>
            </Modal>
            <ReactConfetti />
          </div>
        )}
      </div>
    </>
  );
};

export default MetaTagForm;
