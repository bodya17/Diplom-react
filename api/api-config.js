const LOCAL = true;
const MINMAX_URL = LOCAL
  ? 'http://localhost:5000/minmax?'
  : 'https://min-max.herokuapp.com/minmax?';

const LSSQ_URL = LOCAL
  ? 'http://localhost:5000/least_squares?'
  : 'https://min-max.herokuapp.com/least_squares?';

const LSSQ_DISCRETE_URL = LOCAL
  ? 'http://localhost:5000/least_squares_discrete?'
  : 'https://min-max.herokuapp.com/least_squares_discrete?';

const MINMAX_DISCRETE_URL = LOCAL
  ? 'http://localhost:5000/minmax_discrete?'
  : 'https://min-max.herokuapp.com/minmax_discrete?';

// GET

const MINMAX_DISCRETE_URL_GET = LOCAL
  ? 'http://localhost:5000/minmax_discrete_get_results'
  : 'https://min-max.herokuapp.com/minmax_discrete_get_results';

const MINMAX_URL_GET = LOCAL
  ? 'http://localhost:5000/minmax_get_results'
  : 'https://min-max.herokuapp.com/minmax_get_results';

const LSSQ_URL_GET = LOCAL
  ? 'http://localhost:5000/least_squares_get_results'
  : 'https://min-max.herokuapp.com/least_squares_get_results';

const LSSQ_DISCRETE_URL_GET = LOCAL
  ? 'http://localhost:5000/least_squares_discrete_get_results'
  : 'https://min-max.herokuapp.com/least_squares_discrete_get_results';

export {
  MINMAX_URL,
  LSSQ_URL,
  LSSQ_DISCRETE_URL,
  MINMAX_DISCRETE_URL,
  MINMAX_DISCRETE_URL_GET,
  MINMAX_URL_GET,
  LSSQ_URL_GET,
  LSSQ_DISCRETE_URL_GET
};
