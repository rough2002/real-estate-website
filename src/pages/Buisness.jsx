import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import { businessImageCard } from "../content/buisness.content";

function Buisness() {
  return (
    <div className="flex flex-col text-violet-800 items-center  space-y-8 pb-5">
      <ImageCard content={businessImageCard}>
        <div className="space-x-8">
          <Button>Buisness Listing</Button>
          <Button>Other Advertising options</Button>
        </div>
      </ImageCard>
      <div className="px-32 space-y-6">
        <p className="text-lg font-normal">
          Getting into business is often easier than getting out of business and
          buying an operating business puts you on the fast track to success.
          The challenges are, how do you broadly expose your interest in selling
          without causing undue worry or defections among employees and
          customers? Where do I find businesses for sale? How do I discreetly
          let people know I’m interested in buying or selling?
        </p>
        <h2 className="text-3xl font-semibold">
          Leverage the unique power of ViewPoint
        </h2>
        <p className="text-lg font-normal">
          ViewPoint is a large marketplace that has been connecting buyers and
          sellers for over 13 years. We have more than 500,000 registered users
          from across the globe that all have something in common - an interest
          in Nova Scotia. Our audience either already live here or they want to
          live here and, for some, finding a business opportunity is the impetus
          for moving or staying here. The people who buy and sell businesses are
          the same people that buy and sell houses.
        </p>
        <p className="text-lg font-normal">
          Understandably, you only want to work with a credible company and
          team. ViewPoint has become a respected household name because we’ve
          built a great service. Our brand, site and people are trusted. Like
          you, the leadership team at ViewPoint are seasoned business people. In
          fact, over the last 20 years we have built and sold six businesses.
        </p>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Looking to buy a business?</h2>
          <p className="text-lg font-normal">
            Interested in buying a Nova Scotian business? We will provide you
            with access to our listings of Nova Scotian businesses, as well as
            include your inquiry in our “Businesses Wanted” section.
          </p>
          <Button className="w-64">SUBMIT ENQUIRY</Button>
          <h2 className="text-3xl font-semibold">Have a business to sell?</h2>
          <p className="text-lg font-normal">
            ViewPoint will generate qualified buyer leads for your business
            without identifying it. We do this by advertising on our map/site
            that there are businesses for sale. We only indicate the general
            region, industry and company size range (ie, small, medium or large
            business) - just enough to pique interest.
          </p>
          <Button className="w-64">SUBMIT ENQUIRY</Button>
        </div>
        <div className="border-t-2 border-slate-300 space-y-4 pt-4 mt-4">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <h2 className="text-2xl font-medium">
            What is the cost of the service?
          </h2>
          <p className="text-lg font-normal">
            There is no up front cost to list your business with ViewPoint. We
            only earn a fee if we find the buyer and upon closing of the sale to
            that buyer. The fee is negotiable and can be a flat fee and/or a
            percentage of the purchase price.
          </p>
          <h2 className="text-2xl font-medium">
            What are the benefits of using ViewPoint versus traditional business
            brokers?
          </h2>
          <p className="text-lg font-normal">
            Traditional business brokers don’t have the ability to reach large
            audiences. They typically have a small list of buyers that they
            manually solicit when given a mandate by a business owner. This is
            the old-fashioned inefficient way that doesn’t generate optimal
            exposure which is necessary to achieve an optimal result.
          </p>
          <h2 className="text-2xl font-medium">
            How will the identity of my business be protected?
          </h2>
          <p className="text-lg font-normal">
            Advertising on our map will only indicate the region, industry and
            company size range (ie, small, medium or large business) - just
            enough to pique interest. The identity and other particulars of your
            company will only be released to qualified, pre-screened buyers upon
            your approval.
          </p>
          <h2 className="text-2xl font-medium">Are you a business broker?</h2>
          <p className="text-lg font-normal">
            ViewPoint is open to cooperating with business brokers in the
            marketing of business listings on viewpoint.ca.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Buisness;
