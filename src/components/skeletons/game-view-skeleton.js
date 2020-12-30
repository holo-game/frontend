import { Row, Col } from "..";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function GameViewSkeleton() {
  return (
    <Row>
      <Col className="d-md-block d-none col-sm-4">
        <SkeletonTheme color="#272b3a" highlightColor="#383e52">
          <Skeleton count={1} height="316px" />
        </SkeletonTheme>
      </Col>
      <Col className="col">
        <div className="d-flex flex-column justify-content-between h-100">
          <SkeletonTheme color="#272b3a" highlightColor="#383e52">
            <Skeleton count={1} height="30px" />
          </SkeletonTheme>
          <SkeletonTheme color="#272b3a" highlightColor="#383e52">
            <Skeleton count={4} />
          </SkeletonTheme>
          <SkeletonTheme color="#272b3a" highlightColor="#383e52">
            <Skeleton count={1} height="30px" />
          </SkeletonTheme>
        </div>
      </Col>
    </Row>
  );
}
