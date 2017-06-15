import React, { Component } from 'react';
import { connect } from 'react-redux';

/* * Utils * */
import _ from 'lodash';
import { Link } from 'react-router-dom';

/* * Actions * */
import { fetchAuctions } from '../actions';

/* * Styles * */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList, GridTile } from 'material-ui/GridList';


class BrowseAuctions extends Component {

  componentDidMount() {
    this.props.fetchAuctions(this.props.showing);
  }

  renderAuctions() {
    const styles = {
      image: {
        height: '300px',
        objectFit: 'cover'
      },
      grow: {
        padding: '4px',
        width: '30rem'
      }
    }
    console.log('auctions:', this.props.auctions)
    return _.map(this.props.auctions, auction => {
      console.log('auction.auction_id is:', auction.auction_id)
      return (
        <div key={auction.auction_id} style={styles.grow}>
          <Link to={`/auction/${auction.auction_id}`}>
            <MuiThemeProvider>
              <GridTile
                key={auction.auction_id}
                title={auction.title}
              >
                <img src={auction.url} style={styles.image} />
              </GridTile>
            </MuiThemeProvider>
          </Link>
        </div>
      )
    });
  }

  render() {
    const styles = {
      grid: {
          margin: '8px',
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }
      }

    return (
      <div style={styles.grid}>
        {this.renderAuctions()}
      </div>
    )
  }
}

function mapStateToProps({ auctions, categories }) {
  return {
    auctions: auctions,
    showing: categories.showing
  };
}

export { BrowseAuctions };
export default connect(mapStateToProps, { fetchAuctions })(BrowseAuctions);




