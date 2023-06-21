import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import Heading from "@theme/Heading";
import MDXContent from "@theme/MDXContent";
/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
const url =
  "https://foundation.us5.list-manage.com/subscribe/post?u=ddc99c7db248c3df0ef4f7d24&amp;id=c5376a805c&amp;f_id=003e64e9f0";

function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === "undefined";
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
export default function DocItemContent({ children }) {
  const syntheticTitle = useSyntheticTitle();
  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
      <div className="newsletter-form">
        <div className="newsletter-form--content">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(fields);
            }}
          >
            <h1 className="newsletter-form--title">
              Subscribe for Weekly Green News
            </h1>
            <p className="newsletter-form--subtitle">
              Get the latest information and resources to help you decarbonize
              your software and build momentum towards cleaner and more energy
              efficient software!{" "}
            </p>
            <input
              id="EMAIL"
              autoFocus
              type="email"
              value={fields.EMAIL}
              onChange={handleFieldChange}
              className="newsletter-form--input"
              placeholder="Enter your email..."
            />
            <button className="newsletter-form--button" disabled={loading}>
              {loading ? "Please wait..." : "Submit"}
            </button>
          </form>
          {error && <div className="newsletter-form--error">{message}</div>}
          {success && <div className="newsletter-form--success">{message}</div>}
        </div>
      </div>
    </div>
  );
}
