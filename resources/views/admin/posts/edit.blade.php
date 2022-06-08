@extends('layouts.dashboard')
@section('content')
    <form action="{{ route('admin.posts.update', $post->id) }}" method="post">
        @csrf

        @method('PUT')

        Title<input name="title" type="text" value="{{ $post->title }}">
        Description<input name="content" type="text" value="{{ $post->content }}">
        <select name="category_id">
            <option value="">Select Category</option>
            @foreach ($categories as $categ)
                <option value="{{ $categ->id }}">{{ $categ->name }}</option>
            @endforeach
        </select>
        <button type="submit">Submit</button>
    </form>
@endsection
