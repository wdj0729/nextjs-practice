import React, { ReactElement } from "React";
import Document, {
	DocumentContext,
	Html,
	Main,
	Head,
	NextScript,
} from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<any> {
		const styledComponentsSheet = new ServerStyleSheet();
		const materialSheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						styledComponentsSheet.collectStyles(
							materialSheets.collect(<App {...props} />),
						),
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{materialSheets.getStyleElement()}
						{styledComponentsSheet.getStyleElement()}
					</>
				),
			};
		} finally {
			styledComponentsSheet.seal();
		}
	}
	render(): ReactElement {
		return (
			<Html lang="ko">
				<Head>
					<meta charSet="utf-8" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
