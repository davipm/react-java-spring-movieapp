import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { useQueryClient } from "react-query";

import { useMovie } from "../../hooks";
import { useMutation } from "react-query";
import { api } from "../../services/api.ts";

interface IFormInput {
  reviewBody: string;
}

export default function Reviews() {
  const queryClient = useQueryClient();
  const { movieId } = useParams();
  const { data, isLoading } = useMovie(movieId);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      reviewBody: "",
    },
  });

  const createNewReview = useMutation(
    (value: { reviewBody: string; imdbId: string | undefined }) =>
      api.post(`/api/v1/reviews`, { ...value }),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries("movie");
        reset();
      },
    },
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    createNewReview.mutate({ reviewBody: data.reviewBody, imdbId: movieId });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <img src={data?.poster} alt={data?.title} />
        </Col>

        <Col>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a Review?</Form.Label>
              <Controller
                render={({ field }) => (
                  <Form.Control as="textarea" rows={3} {...field} />
                )}
                control={control}
                name="reviewBody"
              />
            </Form.Group>

            <Button variant="outline-info" type="submit">
              Submit
            </Button>
          </Form>

          <hr />

          {data?.reviews ? (
            data?.reviews.map((review) => (
              <div key={review.created}>
                <p>
                  <i>{review.body}</i>
                </p>
                <hr />
              </div>
            ))
          ) : (
            <p>be the first reviewer!</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}
