import './theme';
import { router, route } from 'reapp-kit';

router(require,
  route('home', '/',
    route('details', '/weather/:zip')
  )
);