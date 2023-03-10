//ts-expect-error: installing package as dev dep throws error
//ts-ignore
import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
	S,
	{ schemaType }
) => {
	if (schemaType === "project") {
		return S.document().views([
			S.view.form(),
			S.view
				.component(Iframe as any)
				.options({
					url: `${
						process.env.NEXT_PUBLIC_VERCEL_URL ||
						"http://localhost:3000"
					}/api/preview`,
					defaultSize: "desktop",
					reload: {
						button: true,
					},
					attributes: {},
				})
				.title("Preview"),
		]);
	}
};
