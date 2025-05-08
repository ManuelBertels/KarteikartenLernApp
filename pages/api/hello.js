import dbConnect from "@/DB/connect";
import Question from "@/DB/connect/question";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const answerFind = await Question.find();
    return response.status(200).json(answerFind);
  }

  if (request.method === "POST") {
    const { question, answer, category, bookmark } = request.body;
    const answerQreate = await Question.create({
      question,
      answer,
      category,
      bookmark,
    });

    return response.status(200).json(answerQreate);
  }

  if (request.method === "DELETE") {
    const { id } = request.body;
    console.log(id);
    const answerDelete = await Question.findByIdAndDelete(id);

    return response.status(200).json(answerDelete);
  }

  if (request.method === "PUT") {
    const { id, question, answer, category, bookmark } = request.body;

    const responeUdate = await Question.findByIdAndUpdate(id, {
      question,
      answer,
      category,
      bookmark,
    });

    return response.status(200).json(responeUdate);
  }
}
