import React, { useState } from "react";
import Modal from "../../components/Modal";
import Nav from "../../components/Nav";
import "./index.css";
import ReactConfetti from "../../components/Confetti";

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
  const [showModal, setShowModal] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    console.log(formInputs);
    setMetaTags(getOgTags(formInputs));
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
          <h1>Generate OG tags for your website!</h1>
          <div className="underline"></div>

          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="title">Title</label>
              <div className="sub-heading-underline"></div>
              <p className="tip">
                Include a descriptive, keyword-rich title for your page. Keep
                the title under 60 characters to avoid truncation.
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
                Write a concise, informative description that accurately
                summarizes the content of the page. Keep the description under
                155 characters to avoid truncation.
              </p>
              <textarea
                id="description"
                value={formInputs.description}
                onChange={(e) => setFormVal("description", e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <div className="sub-heading-underline"></div>
              <p className="tip">
                Use a high-quality, visually appealing image with a minimum size
                of 1200 x 630 pixels for best results.
              </p>

              <input
                id="image"
                value={formInputs.imageUrl}
                onChange={(e) => setFormVal("imageUrl", e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="type">Type</label>
              <div className="sub-heading-underline"></div>
              <p className="tip">
                Select the appropriate type of content for the page, such as
                article, product, or website.
              </p>
              <input
                id="type"
                value={formInputs.type}
                onChange={(e) => setFormVal("type", e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="url">URL</label>
              <div className="sub-heading-underline"></div>
              <p className="tip">
                Include the URL of the page on which the tags are present.
                Ensure that the URL is canonical.
              </p>
              <textarea
                id="url"
                value={formInputs.url}
                onChange={(e) => setFormVal("url", e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="sitename">Site name</label>
              <div className="sub-heading-underline"></div>
              <p className="tip">Include the name of your website or brand</p>
              <input
                id="sitename"
                value={formInputs.siteName}
                onChange={(e) => setFormVal("siteName", e.target.value)}
              ></input>
            </div>
            <button>Submit</button>
          </form>
        </div>
        {metaTags.length > 0 && showModal && (
          <div>
            <Modal title="OG tags" closeModal={() => setShowModal(false)}>
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

export default OgTagForm;
