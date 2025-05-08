import mongoose from 'mongoose';

const questionPaperSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },
    semester: {
      type: Number,
      required: true,
      min: 1,
      max: 8,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    pdfUrl: {
      type: String,
      required: true,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    approvalStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    type: {
      type: String,
      enum: ["Periodic Test", "Previous Year Question Paper", "Question Bank"],
      required: true,
    },
  },
  { timestamps: true }
);

const QuestionPaper = mongoose.model('QuestionPaper', questionPaperSchema);

export default QuestionPaper;