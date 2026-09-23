import Icon from '../components/Icon'
import { featuredReview, reviews } from '../data/reviews'
import { business } from '../data/business'

export default function Reviews() {
  return (
    <section className="section reviews" aria-labelledby="reviews-title">
      <div className="container">
        <h2 id="reviews-title" className="h2 reviews__title">
          Why Knoxville Customers Keep Coming Back
        </h2>

        <div className="reviews__grid">
          <figure className="review review--featured">
            <blockquote>
              <p>“{featuredReview.quote}”</p>
            </blockquote>
            <figcaption>
              <span className="review__author">{featuredReview.author}</span>
              <span className="review__source">Google review · {featuredReview.topic}</span>
            </figcaption>
          </figure>

          <div className="reviews__more">
            {reviews.map((r) => (
              <figure key={r.author} className="review">
                <blockquote>
                  <p>“{r.quote}”</p>
                </blockquote>
                <figcaption>
                  <span className="review__author">{r.author}</span>
                  <span className="review__source">Google review · {r.topic}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <a className="reviews__link" href={business.googleReviews} target="_blank" rel="noopener">
          Read more reviews on Google <Icon name="external" size={16} />
        </a>
      </div>
    </section>
  )
}
