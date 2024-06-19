import NotFound from "@/app/not-found";

function isValidId(id: string) {
    let validIds = [];

    for (let i = 1; i <= 20; i++) {
        validIds.push(i + "");
    }

    return validIds.includes(id);
}

export default function Question({ params }: { params: { id: string } }) {
    const questionId = params.id;

    if (!isValidId(questionId)) {
        return <NotFound />;
    }

    return <span>{params.id} page</span>;
}
