
import css from 'styled-jsx/css'
import {colors} from '../../theme/index.css';

export const dasBoardHeaderStyle = css`
    $white-color: ${colors['white-color']};

    .main-header {
        padding: 70px 0 70px 0;
        max-width: calc(100% - 140px);
        margin: 0 auto 30px;
        position: relative;
        background-position: 50% 50%;
    
        &.main-header-has-header-standard {
        padding-top: 0;
        }
    }
    
    .img-bottom {
        position: relative;
        display: block;
        margin: 20px auto 0;
        margin-bottom: -70px;
    }
    .bg-account {
        background-image: url("static/assets/img/top-header3.png");
      }
    .main-header-content {
        color: $white-color;
        text-align: center;
        
        & > * {
            color: inherit;
        }
        
        & > *:first-child {
            font-weight: 300;
            margin-bottom: 20px;
        }
        
        p {
            font-weight: 400;
            margin-bottom: 0;
        }
    }
    .content-bg-wrap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        text-align: center;
        box-sizing: border-box;
        animation: slide 50s linear infinite;
        will-change: background-position;
        background-size: contain;
      }
      @media (max-width: 768px) {
        .main-header {
          max-width: 100%;
        }
      }
      img {
        max-width: 100%;
        height: auto;
    }
`;