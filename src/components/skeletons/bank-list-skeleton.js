import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Row, Col } from "@/components";

export default function BankListSkeleton() {
  return (
    <Row className="my-sm-5 my-3">
      {[1, 2, 3, 4].map((i) => (
        <Col key={i} className="col-lg-3 col-md-4 col-sm-6">
          <div className="bank-card card">
            <SkeletonTheme color="#272b3a" highlightColor="#383e52">
              <Skeleton
                count="1"
                style={{ marginBottom: "15px", paddingTop: "60%" }}
              />
            </SkeletonTheme>
            <div className="bank-card-content">
              <SkeletonTheme color="#272b3a" highlightColor="#383e52">
                <Skeleton count="4" style={{ marginBottom: "15px" }} />
              </SkeletonTheme>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
