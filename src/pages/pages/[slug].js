import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ReactMarkdown from "react-markdown";
import { Layout, Hero, Paragraph, Container, Panel, Error } from "@/components";
import { useLazyPage } from "@/graphql/actions/page.action";

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;

  const [
    getPageData,
    { data: { pageBySlug } = {}, loading, error },
  ] = useLazyPage({
    variables: { slug },
  });

  useEffect(() => {
    getPageData();
  }, [pageBySlug]);

  return (
    <Layout>
      {!error ? (
        <Fragment>
          <Hero>
            {!loading ? (
              <Paragraph title={pageBySlug?.title} />
            ) : (
              <SkeletonTheme color="#272b3a" highlightColor="#383e52">
                <Skeleton width="200px" height="36px" />
              </SkeletonTheme>
            )}
          </Hero>
          <section className="blank-page">
            <Container>
              {!loading ? (
                <Panel.Wrapper>
                  <Panel.Body className="pb-2">
                    <ReactMarkdown>{pageBySlug?.content}</ReactMarkdown>
                  </Panel.Body>
                </Panel.Wrapper>
              ) : (
                <SkeletonTheme color="#272b3a" highlightColor="#383e52">
                  <Skeleton count={9} height={20} style={{ lineHeight: 3 }} />
                </SkeletonTheme>
              )}
            </Container>
          </section>
        </Fragment>
      ) : (
        <Container>
          <Error
            title="Səhifə Tapılmadı"
            image="/images/dreamer.svg"
            className="pt-5"
          />
        </Container>
      )}
    </Layout>
  );
}
