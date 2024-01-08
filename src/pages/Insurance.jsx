import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import ImageTextCard from "../components/ImageTextCard";
import { insuranceImageCard, servicesList } from "../content/insurance.content";
import { insuranceTextCards } from "../content/insurance.content";

function Insurance() {
  return (
    <div className="flex flex-col  text-violet-800 items-center space-y-8 ">
      <ImageCard content={insuranceImageCard}>
        <Button>Meet Our team</Button>
      </ImageCard>
      <div className="flex space-x-2">
        {insuranceTextCards.map((card, i) => (
          <ImageTextCard content={card} key={i} />
        ))}
      </div>
      <div className="border-t-2 border-slate-300 space-y-4 pt-10 px-32 bg-slate-100 pb-14">
        <h2 className="text-3xl font-semibold">
          HELPFUL INFORMATION FROM THE INSURANCE BROKER ASSOCIATION OF CANADA
          (IBAC)
        </h2>
        <h2 className="text-2xl font-medium">HOW MUCH COVERAGE</h2>
        <p className="text-lg font-normal">
          Much insurance e.g. auto and mortgage coverage is mandatory. There is
          however considerable variance in the amount of protection you choose
          to buy. Determining the right amount of coverage for a particular
          person is one of the things that a broker is trained to help with. A
          broker’s experience and professionalism will help you strike the right
          balance between acceptable risk and the premium you’ll have to pay.
          You don’t want to overpay for coverage you’re not likely need, but
          neither do you want to be exposed to unnecessary loss in the event of
          a claim. A broker will advise you how to identify the risks you want
          to be covered for and then shop on your behalf to find the insurance
          company that offers the best value for your particular needs.
        </p>
        <h2 className="text-2xl font-medium">DEDUCTIBLES</h2>
        <p className="text-lg font-normal">
          Almost without exception, a deductible clause is included on all
          policies. A deductible represents the amount the insured is required
          to pay for each loss before receiving any payment from the insurer.
          The amount of the deductible is the amount the insured retains or
          contributes to the loss settlement. The deductible is considered to be
          a partial retention of the loss amount. For example, if the deductible
          stated on the policy is $1,000, the insurer is responsible only for
          those amounts over $1,000. What deductibles accomplish The higher the
          deductible, the lower the premium paid. In consultation with your
          broker you should aim to select a deductible that you can
          realistically afford to pay for in a loss situation. The application
          of a deductible therefore helps to make insurance more affordable.
          Insurers normally will provide you with deductible options depending
          on your tolerance to risk.
        </p>
        <h2 className="text-2xl font-medium">CLAIMS</h2>
        <p className="text-lg font-normal">
          The law restricts payment under insurance contracts to only those
          amounts as are required to indemnify you for your losses. The proper
          application of the principle of indemnity ensures that people receive
          the actual amount of their loss, no more and no less. One of the
          benefits of having a broker is that if you have an incident, the
          broker can help take care of all the arrangements on your behalf.
          Brokers ensure that the necessary steps are taken and information
          gathered and then file the claim reports. They will also serve as your
          advocate in the event of any dispute with your insurance company,
          improving your odds of a prompt and fair settlement.
        </p>
        <h2 className="text-2xl font-medium">WHY USE A BROKER</h2>
        <p className="text-lg font-normal">
          In Canada, you can purchase insurance a) directly from an insurance
          company; b) from an agent who represents only one insurer and can only
          offer that company’s products; c) on the Internet; through a group
          company or association purchase or d) through an insurance broker who
          can offer a choice of coverage from various insurance companies.
          Insurance brokers do not work for an insurance company, they work for
          you. That’s the key thing that separates them from all other purchase
          options. It means you have more advice, more choice, better pricing
          and a representative that’s on your side in the event of a claim.
        </p>
        <h2 className="text-2xl font-medium">WHAT DO BROKERS DO?</h2>
        <p className="text-lg font-normal">
          Unlike other insurance providers, an insurance broker works for you
          rather than an insurance company. Brokers use their professional
          knowledge and experience to help you properly assess your insurance
          needs, shop for the best value in insurance coverage and help you in
          the event of a claim. Many brokers will help you with a quote online
          or over the phone, but personal consultations are encouraged, to
          answer any questions you may have, ensure there are no
          misunderstandings and no detail is overlooked.
        </p>
        <p className="text-lg font-normal">There services include :</p>
        <ul className="list-disc pl-6">
          {servicesList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Insurance;
