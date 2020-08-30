import React from "react";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";

import "../../components/collection-preview/collection-preview.component";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
