import Divider from "@/src/components/ui/elements/Divider";
import { Input } from "@/src/components/ui/elements/form/Input";
import Radio from "@/src/components/ui/elements/form/Radio";
import { Text } from "@/src/components/ui/elements/Text";
import React from "react";

const Form3 = () => {
  return (
    <>
      <div className="flex flex-col gap-12">
        <Text variant={"body"} className="text-neutral">
          On behalf of the International Coaching Federation (EMCC) and its
          stakeholders, we thank you in advance for your cooperation with our
          Ethical Conduct Review (ECR) Process. This form should be used to
          report possible breaches of the EMCC Code of Ethics by an EMCC
          Professional (an EMCC Coach Member or EMCC Credential-holder).
        </Text>
        <Text variant={"body"} className="text-neutral">
          In order to have a well-informed complaint filing, we highly recommend
          that you read the EMCC Code of Ethics and the Explanation of the
          Complaint Process. Please note that the complaint form is only
          available in English but you may submit the complaint in another
          language. If the complaint is accepted into the ECR process,
          professional interpreters and/or translators will be utilized to
          ensure your complaint is clearly communicated.{" "}
        </Text>
        <Text variant={"body"} className="text-neutral">
          The Independent Review Board (IRB) is an integral part of the
          International Coaching Federation (EMCC) and a cornerstone for the
          Association’s guidelines regarding ethics and values. The IRB’s charge
          is to uphold the standards of the coaching profession as stated in the
          EMCC Code of Ethics.
        </Text>
        <Divider />
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8 items-center justify-center">
            <Text variant={"card_title_large"} className="text-neutral">
              Authorization to Investigate
            </Text>
            <Text variant={"body"} className="text-neutral">
              Please complete the following authorization for us to proceed with
              an investigation of your complaint.
            </Text>
          </div>
          <Text variant={"body"} className="text-neutral">
            I declare the facts I have stated herein to be true, and the
            supporting documents submitted to be authentic to the best of my
            knowledge and belief. I further declare that I am filing this
            complaint in good faith and upon reasonable belief and that the
            complaint is not being filed for the purpose of harassment or
            embarrassment of the parties named. If after reviewing the
            International Coaching Federation (EMCC) and/or Independent Review
            Board (IRB) reasonably determine that my complaint is based upon
            false or misleading information and/or documents, I understand that
            my complaint will be dismissed with prejudice and that I may be
            subject to sanctions as reasonably determined by the EMCC in
            consultation with the IRB. If the complaint is deemed incomplete or
            insufficient in its allegations, the EMCC, in its reasonable
            discretion, may reject the complaint and return it to me for
            completion or further supplementation. I hereby authorize the EMCC,
            EMCC staff and the members of the IRB to review and communicate the
            complaint and supporting documentation to the EMCC Professional
            Coach identified in my complaint. I further acknowledge that I have
            read, acknowledge my understanding of, and agree to be bound by the
            following:{" "}
          </Text>
          <div className="flex items-start gap-1">
            <Text variant={"body"} className="text-neutral">
              1.
            </Text>{" "}
            <Text variant={"body"} className="text-neutral">
              the EMCC, its officers, directors and staff, including the IRB
              members, cannot guarantee any outcome, and are therefore held
              harmless of any claim arising out of this complaint or the Ethical
              Complaint Review (ECR) Process.
            </Text>{" "}
          </div>
          <div className="flex items-start gap-1">
            <Text variant={"body"} className="text-neutral">
              2.
            </Text>{" "}
            <Text variant={"body"} className="text-neutral">
              the EMCC and IRB are not a court of law and cannot impose monetary
              awards or provide injunctive or other relief, but can provide
              certain remedies (such as, by way of example, requiring the EMCC
              Professional Coach named in the complaint to take certain
              trainings) and certain sanctions (such as, by way of example,
              suspending or terminating an EMCC membership or EMCC Credential);
              and
            </Text>{" "}
          </div>
          <div className="flex items-start gap-1">
            <Text variant={"body"} className="text-neutral">
              3.
            </Text>{" "}
            <Text variant={"body"} className="text-neutral">
              the EMCC, the IRB and anyone associated with the ECR Process
              cannot act as my attorney or advisor.{" "}
            </Text>{" "}
          </div>
          <Text variant={"body"} className="text-neutral">
            I acknowledge and agree that a copy of this complaint and all other
            supporting documents I submit will be disclosed in full to the EMCC
            Professional Coach I have named in the complaint. In the event that
            the EMCC Professional identified by me in the complaint is not a
            member of the EMCC, nor an EMCC credentialed coach, I understand
            that the EMCC has no authority to pursue the complaint or an
            investigation of the same, nor can EMCC compel any action or
            response from the named EMCC Professional. In that event, EMCC will
            notify me in writing. Where the EMCC Professional I have named in
            the complaint is subject to the authority of the EMCC, the EMCC
            Professional will be provided with an opportunity to review and
            respond in accordance with established ECR procedures.
          </Text>
          <Text variant={"body"} className="text-neutral">
            I further acknowledge my understanding that this is a confidential
            peer review process and not a legal proceeding. I agree to at all
            times while my complaint is pending promptly and in good faith
            cooperate with the EMCC and IRB in its investigation of the
            complaint. I will be advised of the outcome and any remedies or
            sanctions, if so, imposed on the EMCC Professional who is the
            subject of my complaint. I further understand and agree that I will
            not be provided access to the IRB’s reports, notes, findings or
            other written documents relied upon and which were generated in
            connection with the investigation and IRB deliberation on this
            matter. Members of the IRB shall be authorized to review any and all
            documents, statements, notes or other records submitted by me or by
            the EMCC Professional named in my complaint and/or which are
            obtained or developed in the course of the investigation and
            deliberation on this matter. By filing this complaint against the
            EMCC Professional named, I hereby knowingly and voluntarily waive my
            right to confidentiality as it relates only to my interactions with
            the named EMCC Professional. The EMCC’s ECR process and the contents
            of this complaint are intended to be and remain confidential in
            nature. Notwithstanding that presumption of confidentiality, I
            understand and agree that some facts and information derived from my
            complaint, the investigation of the same, and the IRB’s findings may
            be disseminated and used by the EMCC and IRB for educational and
            training purposes only. Prior to any such education or training
            related dissemination and use by either the EMCC or IRB, the EMCC
            will undertake reasonable and good faith efforts to protect the
            identities of the parties and to remove those references that may
            identify or be used to identify the parties, as well as confidential
            information contained in the records.
          </Text>
          <Text variant={"body"} className="text-neutral">
            I am aware that if the complaint is accepted by the IRB for review,
            it must proceed in accordance with the timeline set forth by the
            investigation team, unless extenuating circumstances prevent this.
            Circumstances that would allow delay of the process are determined
            at the discretion of the IRB. Otherwise, the complaint could be
            dismissed and can be refiled as long as it is still within the
            one-year time frame required by the IRB.
          </Text>
          <Text variant={"body"} className="text-neutral">
            Please note: a "no" response to any of the statements below will
            prohibit you from completing this complaint form
          </Text>
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"} className="text-neutral">
              I understand that EMCC will not review anonymous complaints.
            </Text>
            <Radio label="Yes" name="yes" id="yes" />
            <Radio label="No" name="no" id="no" />
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"} className="text-neutral">
              I understand that a complaint must be filed with EMCC within one
              (1) year of the date of the conduct complained of. The one (1)
              year limitation is in place to stress the importance of timely
              reporting of complaints and to better ensure the likelihood of
              accurate recollections of fact and the preservation of relevant
              documentation by the parties to the complaint.
            </Text>
            <Radio label="Yes" name="yes" id="yes" />
            <Radio label="No" name="no" id="no" />
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"} className="text-neutral">
              I hereby authorize that my digital interview can be recorded.{" "}
            </Text>
            <Radio label="Yes" name="yes" id="yes" />
            <Radio label="No" name="no" id="no" />
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"} className="text-neutral">
              I understand that the EMCC/IRB will share all evidence that I have
              shared/will share relating to this complaint, with the EMCC
              Professional named in this complaint{" "}
            </Text>
            <Radio label="Yes" name="yes" id="yes" />
            <Radio label="No" name="no" id="no" />
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"} className="text-neutral">
              I understand that the IRB reserves the right to suspend, at the
              IRB’s reasonable discretion, any action on any properly filed
              ethical complaint until known pre-existing, pending and related
              civil or criminal actions have been resolved. Complaints involved
              in a current legal matter will be accepted for the ECR process by
              the IRB leadership on a case-by-case basis.
            </Text>
            <Radio label="Yes" name="yes" id="yes" />
            <Radio label="No" name="no" id="no" />
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"} className="text-neutral">
              I affirm that this complaint is not solely concerning an EMCC
              Professional's Intellectual Property (IP) infringement without
              proof from a court of law that such a violation has been
              demonstrated.
            </Text>
            <Radio label="Yes" name="yes" id="yes" />
            <Radio label="No" name="no" id="no" />
          </div>
          <div className="flex flex-col gap-5">
            <Text variant={"card_title_small"} className="text-neutral">
              I affirm that this complaint is not solely concerning an EMCC
              Professional's Intellectual Property (IP) infringement without
              proof from a court of law that such a violation has been
              demonstrated.{" "}
            </Text>
            <Radio label="Yes" name="yes" id="yes" />
            <Radio label="No" name="no" id="no" />
          </div>
          <div className="max-w-[300px] flex flex-col gap-5">
            <Input type="text" label="Full Name" name="full_name" />
            <Input type="date" label="Date" name="full_name" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form3;
